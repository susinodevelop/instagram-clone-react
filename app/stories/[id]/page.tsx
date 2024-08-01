import StoriesViewer from "@/components/StoriesViewer"
import { getUserStories } from "@/services/UserService"
import { notFound, redirect } from "next/navigation"
import { headers } from 'next/headers'

interface StoriesPage {
    params: {
        id: string
    }
}
const StoriesPage = async ({ params }: StoriesPage) => {

    const previousUrl = headers().get("referer") || ''
    const { id } = params
    const stories = await getUserStories(Number(id))

    return (
        stories && stories.length > 0 ?
            <StoriesViewer stories={stories} previousUrl={previousUrl} />
            :
            previousUrl ? redirect(previousUrl) : notFound()
    )
}

export default StoriesPage;