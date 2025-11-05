import type { ListType } from "../types/ListType"

interface ListComponentProps {
    items: ListType;
}
const ListComponent = ({ items }: ListComponentProps) => {
    return (
        <div className="p-4">
            <h2 className="text-gray-800 font-semibold text-sm mb-3">{items.title}</h2>
            <ul className="space-y-4 text-gray-600 text-sm">
                <li className="hover:underline cursor-pointer"><a href={items.link1}>{items.nameLink1}</a></li>
                <li className="hover:underline cursor-pointer"><a href={items.link2}>{items.nameLink2}</a></li>
                <li className="hover:underline cursor-pointer"><a href={items.link3}>{items.nameLink3}</a></li>
                <li className="hover:underline cursor-pointer"><a href={items.link4}>{items.nameLink4}</a></li>
                <li className="hover:underline cursor-pointer"><a href={items.link5}>{items.nameLink5}</a></li>
                <li className="hover:underline cursor-pointer"><a href={items.link6}>{items.nameLink6}</a></li>
                <li className="hover:underline cursor-pointer"><a href={items.link7}>{items.nameLink7}</a></li>
                <li className="hover:underline cursor-pointer"><a href={items.link8}>{items.nameLink8}</a></li>
            </ul>
        </div>
    )
}

export default ListComponent
