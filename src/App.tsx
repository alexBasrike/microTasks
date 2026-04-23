import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne.tsx";
import {PageTwo} from "./components/pages/PageTwo.tsx";
import {PageThree} from "./components/pages/PageThree.tsx";
import {Link, Navigate, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404.tsx";

export const App = () => {
    return (
        <div>

            <div className={styles.header}>
                <h1>
                    <Link to="/">
                        HEADER
                    </Link>
                </h1>
            </div>

            <div className={styles.body}>
                <div className={styles.nav}>
                    <nav>
                        <ul>
                            <li><Link to="/page-one">PageOne</Link></li>
                            <li><Link to="/page-two">PageTwo</Link></li>
                            <li><Link to="/page-tree">PageThree</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/page-one"/>}/>

                        <Route path="/page-one" element={<PageOne/>}/>
                        <Route path="/page-two" element={<PageTwo/>}/>
                        <Route path="/page-tree" element={<PageThree/>}/>

                        <Route path="/error404" element={<Error404/>}/>
                        <Route path="/*" element={<Navigate to="/error404"/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}
