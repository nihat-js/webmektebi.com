import { articles } from "@/config/articles"

export default function Article(){

    function generateMetadata(){
        return {
            title: 'Article',
            description: 'Article description',
            image: 'https://via.placeholder.com/1200x630',
            url: 'https://example.com/article',
            type: 'article',
            publishedAt: '2021-01-01',
            modifiedAt: '2021-01-01',
        }
    }

    const article = articles[0].text

    return (
        <div>
            <h1>Article</h1>

            <div dangerouslySetInnerHTML={{ __html: article }} />

        </div>
    )
}