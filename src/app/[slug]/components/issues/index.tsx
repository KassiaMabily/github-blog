"use client"

import api from "@/lib/axios";
import { useEffect, useState } from "react";
import { Container, Content, Heading, IssueCard } from "./styles";
import { formatDistanceToNow, parseISO } from "date-fns";
import { ptBR } from 'date-fns/locale';
import Markdown from "react-markdown";

type Props = {
    slug: string
}

export default function Issues({ slug }: Props) {
    const [ searchString, setSearchString ] = useState("");
    const [ query, setQuery ] = useState("");
    const [ data, setData ] = useState<any>();

    useEffect(() => {
        async function fetchIssues() {
            let searchString = `repo:${slug}/github-blog`
            if(query) searchString = `${query}+`+searchString

            const res = await api.get(`/search/issues?q=${searchString}`)

            if (res.status !== 200) {
                throw new Error('Failed to fetch data')
            }

            setData(res.data)
        }

        fetchIssues()
    }, [slug, query])

    let totalIssues = data?.total_count
    let issues = data?.items ?? []

    return (
        <Container>
            <Heading>
                <div>
                    <h3>Publicações</h3>
                    <span>{totalIssues} publicações</span>
                </div>

                <input
                    placeholder="Buscar conteúdo"
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                    onBlur={() => setQuery(searchString)}
                />
            </Heading>

            <Content>
                {
                    issues.map((issue: any) => (
                        <IssueCard key={issue.id} href={`/${slug}/posts/${issue.number}`}>
                            <div>
                                <h2>{issue.title}</h2>
                                <time dateTime={issue.updated_at}>
                                    {formatDistanceToNow(parseISO(issue.updated_at), { addSuffix: true, locale: ptBR })}
                                </time>
                            </div>

                            <Markdown>{issue.body.substring(0,150) + (issue.body.length > 150 ? "..." : "")}</Markdown>
                        </IssueCard>
                    ))
                }
            </Content>
        </Container>
    )
}
