import React,{useState} from 'react'
import Sidebar from './Sidebar';
import Task  from './Task';
export const Content = () => {
 const [selectedTab, setSelectedTab] = useState("HOME")

    return (
        <section className="content">
            <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
            <Task selectedTab={selectedTab} />
        </section>
    )
}
export default Content;