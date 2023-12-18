import { Layout } from "@/components/layout";
import api from "@/lib/axios";
import Link from "next/link";
import { Heading, Info } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faComment, faArrowUpRightFromSquare, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { formatDistanceToNow, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import Markdown from 'react-markdown'

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default async function PostPage({ params }: { params: { slug: string, id: string } }) {
    const post = await getData(params.slug, params.id);

    function Header() {
        return (
            <Heading>
                <div>
                    <Link href={`/${params.slug}`}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        Voltar
                    </Link>

                    <a href={post.html_url}>
                        Ver no github
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </div>
                <div>
                    <h1>{post.title}</h1>
                    <Info>
                        <div>
                            <FontAwesomeIcon icon={faGithub} />
                            {post.user.login.toLowerCase()}
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCalendarDay} />
                            { formatDistanceToNow(parseISO(post.updated_at), { addSuffix: true, locale: ptBR })}
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faComment} />
                            {post.comments} comentários
                        </div>
                    </Info>
                </div>
            </Heading>
        )
    }

    return (
        <div>
            <Layout header={<Header />}>
                <Markdown
                    components={{
                        code({node, className, children, style, ...props}: any) {
                            const match = /language-(\w+)/.exec(className || '')
                            return match ? (
                                <SyntaxHighlighter
                                    style={oneDark}
                                    PreTag="div"
                                    language={match[1]}
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            ) : (
                                <code {...props} className={className}>
                                    {children}
                                </code>
                            )
                        }
                    }}
                >
                    {post.body}
                </Markdown>
            </Layout>
        </div>
    )
}

async function getData(slug: string, id: string){
    const res = await api.get(`/repos/${slug}/github-blog/issues/${id}`)

    if (res.status !== 200) {
      throw new Error('Failed to fetch data')
    }

    return res.data
}
