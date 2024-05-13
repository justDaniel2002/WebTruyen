import { useRecoilState } from "recoil";
import { StickyHeadTable, StoriesCol } from "../../components/table"
import { storiesAtom } from "../../states/atom";

export const ManageStories = () => {
    const [stories, setStories] = useRecoilState(storiesAtom);
    const trimStories = stories.map(s => {
        return {
            id : s.id,
            title: s.title,
            author : s.author,
            description : s.description,
            chapers : s.chapers.length,
            category : s.category.name
        }
    })
    return <>
    <div className="px-40 py-20">
        <StickyHeadTable columns={StoriesCol} rows={trimStories}/>
    </div>
    </>
}