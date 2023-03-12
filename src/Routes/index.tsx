import App from "../App";
import EigthLaboratoryWork from "../Pages/EigthLaboratoryWork/EigthLaboratoryWork";
import FifthLaboratoryWork from "../Pages/FifthLaboratoryWork/FifthLaboratoryWork";
import FirstLaboratoryWork from "../Pages/FirstLaboratoryWork/FirstLaboratoryWork";
import FouthLaboratoryWork from "../Pages/FouthLaboratoryWork/FouthLaboratoryWork";
import MainPage from "../Pages/MainPage/MainPage";
import SecondLaboratoryWork from "../Pages/SecondLaboratoryWork/SecondLaboratoryWork";
import SeventhLaboratoryWork from "../Pages/SeventhLaboratoryWork/SeventhLaboratoryWork";
import SixthLaboratoryWork from "../Pages/SixthLaboratoryWork/SixthLaboratoryWork";
import ThirdLaboratoryWork from "../Pages/ThirdthLaboratoryWork/ThirdthLaboratoryWork";

export const MyRoutes = [
    { path: "/FirstLaboratoryWork", element: <FirstLaboratoryWork /> },
    { path: "/SecondLaboratoryWork", element: <SecondLaboratoryWork /> },
    { path: "/ThirdLaboratoryWork", element: <ThirdLaboratoryWork /> },
    { path: "/FouthLaboratoryWork", element: <FouthLaboratoryWork /> },
    { path: "/FifthLaboratoryWork", element: <FifthLaboratoryWork /> },
    { path: "/SixthLaboratoryWork", element: <SixthLaboratoryWork /> },
    { path: "/SeventhLaboratoryWork", element: <SeventhLaboratoryWork /> },
    { path: "/EigthLaboratoryWork", element: <EigthLaboratoryWork /> },
    { path: "/MainPage", element: <MainPage /> },
];
