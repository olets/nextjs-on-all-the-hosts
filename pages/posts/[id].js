import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className="text-4xl">{postData.title}</h1>
      <div className="text-gray-400">
        <Date dateString={postData.date} />
      </div>
      <div className="prose" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}
