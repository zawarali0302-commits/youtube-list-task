import type { ListType } from "../types/ListType"
import ListComponent from "./ListComponent";

interface YoutubeListComponentProps {
    list : ListType[];
}
const YoutubeListComponent = ({list}:YoutubeListComponentProps) => {
    return (
        <div className="flex">
            {list.map((l) => <ListComponent items={l} /> )}
        </div>
    )
}

export default YoutubeListComponent
