import { BiSolidDetail } from "react-icons/bi";
import { ImParagraphLeft } from "react-icons/im";
import { MdOutlineCastForEducation } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
import { RiPlayListAddLine } from "react-icons/ri";

var routing = [
    {
        name : 'Details',
        path : "/resumebuilder/detailes",
        icon : <BiSolidDetail /> // ()=>{ return <BiSolidDetail /> }
    },
    {
        name : 'Summary',
        path : "/resumebuilder/summary",
        icon : <ImParagraphLeft />
    },
    {
        name : 'Education',
        path : "/resumebuilder/education",
        icon : <MdOutlineCastForEducation />
    },
    {
        name : 'History',
        path : "/resumebuilder/workHistory",
        icon : <MdWorkHistory />
    },
    {
        name : 'Projects',
        path : "/resumebuilder/projects",
        icon : <FaDiagramProject />
    },
    {
        name : 'Add Section',
        path : "/resumebuilder/summary",
        icon : <RiPlayListAddLine />
    }
]


// let x :any = document.cookie && document.cookie.split("=").length > 0 && document.cookie.split("=")[1];

// if(x && x.length > 50){
//     let dashboardRoute = {
//         name : "Dashboard",
//         path : "/resumebuilder/dashboard",
//         icon : <BiSolidDetail /> // ()=>{ return <BiSolidDetail /> }   
//     }
//     routing = [dashboardRoute , ...routing]
// }


export default routing;