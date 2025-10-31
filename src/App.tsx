
import './App.css'
import YoutubeListComponent from './componenets/YoutubeListComponent'
import type { ListType } from './types/ListType'

const list1: ListType[] = [{
  id: 1,
  title: "About Youtube",
  nameLink1: "Blog", link1: "https://www.google.com/",
  nameLink2: "How Youtube Works", link2: "",
  nameLink3: "Jobs", link3: "",
  nameLink4: "Press", link4: "",
  nameLink5: "Youtube Culture & Trends", link5: "",
  nameLink6: "NFL Sunday Tickets", link6: "",
}, {
  id: 2,
  title: "Products",
  nameLink1: "Youtube Kids", link1: "",
  nameLink2: "Youtube Music", link2: "",
  nameLink3: "Youtube Originals", link3: "",
  nameLink4: "Youtube Podcast", link4: "",
  nameLink5: "Youtube Premium", link5: "",
  nameLink6: "Youtube Select", link6: "",
  nameLink7: "Youtube Studio", link7: "",
  nameLink8: "Youtube TV", link8: "",
}, {
  id: 3,
  title: "For Business",
  nameLink1: "Developers", link1: "",
  nameLink2: "Youtube Advertising", link2: "",
}, {
  id: 4,
  title: "For Creators",
  nameLink1: "Creating for Youtube Kids", link1: "",
  nameLink2: "Creator Research", link2: "",
  nameLink3: "Creator Services Directory", link3: "",
  nameLink4: "Youtube Artists", link4: "",
  nameLink5: "Youtube Creators", link5: "",
  nameLink6: "Youtube NextUp", link6: "",
  nameLink7: "Youtube VR", link7: "",
}, {
  id: 5,
  title: "Our Commitments",
  nameLink1: "Creators for Change", link1: "",
  nameLink2: "CSAI Match", link2: "",
},]


function App() {

  return (
    <>
      <div>
        <YoutubeListComponent list={list1} />
      </div>

    </>
  )
}

export default App
