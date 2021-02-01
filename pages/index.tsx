import Link from 'next/link'
import Layout from '../components/Layout'
import styled from "@emotion/styled";
import wrappingImage from '../images/m_wrap.png'

const EmotionTest = styled.div`
font-size: 42px;
`

const IndexPage = () => (
    <Layout title="Home | Next.js + TypeScript Example">
        <EmotionTest>Hello Next.js 👋</EmotionTest>
        <p>
            <Link href="/about">
                <a>About</a>
            </Link>


        </p>

        <p>
            <Link href="/sample">
                <img src={wrappingImage}/>
            </Link>
        </p>
    </Layout>
)

export default IndexPage
