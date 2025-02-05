import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Login, Home, Courses, Examination, Page1, Profile, Page2, ShowForm, Regular, ReAppear} from './layouts'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}>
        </Route>
        <Route path='/home' element={<App />}>
          <Route index element={<Home />} />
          <Route path='courses' element={<Courses />} />
          <Route path='examination' element={<Examination />} />
          <Route path='regular' element={<Regular />} />
          <Route path='reappear' element={<ReAppear />} />
          <Route path='page1' element={<Page1 />} />
          <Route path='page2' element={<Page2 />} />
          <Route path=':formId' element={<ShowForm />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
