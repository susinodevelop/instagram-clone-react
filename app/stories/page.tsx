import StoriesViewer from "@/components/StoriesViewer"
import { getUserStories } from "@/services/UserService"

const StoriesPage = async () => {

    const stories = await getUserStories(1) //TODO revisar

    return (
        <StoriesViewer stories={stories} />
    )
}

export default StoriesPage;