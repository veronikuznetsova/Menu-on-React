import React from 'react';
import styles from './style.module.scss';
import Form from './components/Form';
import Todo from './components/Todo';
import ShouldComponentUpdateExample from './components/ShouldComponentUpdateExample';
import FormSubscription from './components/FormSubcscription';
import Image from 'components/Image';
import backgroundImage from 'images/logo.jpeg';
import SmallImage from '../Image/versions/SmallImage';
import PreviewImage from '../Image/versions/PreviewImage';
import FunctionalComponent from './components/FunctionalComponent';
import TodoFunc from './components/Todo/TodoFunc';
import Users from './components/Users';
import HomeWork from './components/HomeWork';
import VideoPlayer from './components/VideoPlayer';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import CoursePage from '../../pages/CoursePage';
import MasterclassPage from '../../pages/MasterclassPage';
import PrepodPage from '../../pages/PrepodPage';
import BlogPage from '../../pages/BlogPage';
import ContactPage from '../../pages/ContactPage';
import UsersPage from '../../pages/UsersPage';
import UsersDetailPage from '../../pages/UsersDetailPage';
import MyAccount from '../../pages/MyAccount';
import DownloadPage from '../../pages/DownloadPage';
import DetailPost from '../../pages/DetailPost';
import PostPage from '../../pages/PostPage';
import CommentPage from '../../pages/CommentPage';

class Content extends React.Component {
    render() {
        return(
            <div className={styles.content}>
                {/* <Form/>
                {/* <Todo /> */}
                {/* <ShouldComponentUpdateExample /> */}
                {/* <FormSubscription /> */}
                {/* <SmallImage src={backgroundImage} />
                <PreviewImage src={backgroundImage} />
                <FunctionalComponent title='hello'/>  */}
                {/* <TodoFunc /> */}
            {/* <FunctionalComponent title='hello'/> */}
            {/* <Users /> */}
            {/* <HomeWork /> */}
            {/* <VideoPlayer /> */}
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/kursy-programmirovaniya' element={<CoursePage />} />
                <Route path='/besplatnye-probnye-zanatia' element={<MasterclassPage />} />
                <Route path='/teachers' element={<PrepodPage />} />
                <Route path='/blog' element={<BlogPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/users' element={<UsersPage />} />
                <Route path='/users/:id' element={<UsersDetailPage />} />
                <Route path='/my-account' element={<MyAccount />}>
                    <Route path='download' element={<DownloadPage />} />
                </Route>
                <Route path='/posts' element={<DetailPost/>} />
                <Route path='/posts/:id' element={<PostPage/>}>
                    <Route path='/posts/:id/:comments' element={<CommentPage/>}/>
                </Route>
            </Routes>
            </div>
        )
    }
}

export default Content;