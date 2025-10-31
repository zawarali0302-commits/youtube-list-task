import type { ListType } from "../types/ListType"
import ListComponent from "./ListComponent";

interface YoutubeListComponentProps {
    list : ListType[];
}
const YoutubeListComponent = ({list}:YoutubeListComponentProps) => {
    return (
        <div className="flex">
            {list.map((l) => <li key={l.id}><ListComponent items={l} /></li> )}
        </div>
    )
}

export default YoutubeListComponent
