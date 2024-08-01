import StoriesViewer from "@/components/StoriesViewer"
import { getUserStories } from "@/services/UserService"

//TODO hace falta esta pagina?
const StoriesPage = async () => {

    const stories = await getUserStories(1) //TODO revisar

    return (
        <StoriesViewer stories={stories} previousUrl="/feed"/> //TODO revisar
    )
}

export default StoriesPage;