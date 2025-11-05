import type { ListType } from "../types/ListType"
import ListComponent from "./ListComponent";

interface YoutubeListComponentProps {
    list : ListType[];
}
const YoutubeListComponent = ({list}:YoutubeListComponentProps) => {
    return (
        <div className="flex justify-between bg-gray-200">
            {list.map((l) => <ul><li key={l.id}><ListComponent items={l} /></li></ul> )}
        </div>
    )
}

export default YoutubeListComponent
