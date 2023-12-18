import Image from "next/image"
import Link from "next/link"
import { Container, Content, CoverContainer, HeaderContainer } from "./styles"

type Props = {
    header: React.ReactNode
    children: React.ReactNode
}

export function Layout({ header, children }: Props) {
    return (
        <Container>
            <CoverContainer>
                <Link href={"/"}>
                    <Image
                        src="/logo.svg"
                        alt=""
                        width={148}
                        height={98}
                    />
                </Link>

                <div id="effect-rectangle" />
                <div id="effect-ellipse-1" />
                <div id="effect-ellipse-2" />
            </CoverContainer>

            <Content>
                <HeaderContainer>
                    {header}
                </HeaderContainer>
                <div>
                    {children}
                </div>
            </Content>

        </Container>
    )
}
