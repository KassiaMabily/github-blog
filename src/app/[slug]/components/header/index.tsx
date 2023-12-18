import api from "@/lib/axios"
import Image from "next/image";
import { Container, Content, Info } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


type Props = {
    slug: string
}

export async function Header({ slug }: Props) {
    const user = await getData(slug);

    return (
        <Container>
            <Image
                src={user.avatar_url}
                alt=""
                height={148}
                width={148}
            />

            <Content>
                <div>
                    <h1>{user.name}</h1>

                    <a href={user.html_url}>
                        GITHUB
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </div>

                <p>{user.bio}</p>

                <Info>
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        {user.login.toLowerCase()}
                    </div>
                    {
                        user.company && (
                            <div>
                                <FontAwesomeIcon icon={faBuilding} />
                                {user.company}
                            </div>
                        )
                    }
                    <div>
                        <FontAwesomeIcon icon={faUserGroup} />
                        {user.followers} seguidores
                    </div>
                </Info>
            </Content>
        </Container>
    )
}

async function getData(slug: string){
    const res = await api.get(`/users/${slug}`)

    if (res.status !== 200) {
      throw new Error('Failed to fetch data')
    }

    return res.data
}
