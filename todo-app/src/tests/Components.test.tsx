import React, { act } from "react";
import { render, screen, } from '@testing-library/react'
import { Provider } from "react-redux";
import store from "../store/store";
import ActiveTaskList from "../components/ActiveTaskList/ActiveTaskList";
import AllTaskList from "../components/AllTaskList/AllTaskList";
import CompletedTaskList from "../components/CompletedTaskList/CompletedTaskList";

test('renders active tasks', async () => {
    await act(async () => {
        render(
            <Provider store={store}>
                <ActiveTaskList/>
            </Provider>
        )
    })
    expect(screen.getByText(/Действующие задачи/i)).toBeInTheDocument()
})
test('renders completed tasks', async () => {
    await act(async () => {
        render(
            <Provider store={store}>
                <CompletedTaskList/>
            </Provider>
        )
    })
    expect(screen.getByText(/Выполненные задачи/i)).toBeInTheDocument()
})
test('renders all tasks', async () => {
    await act(async () => {
        render(
            <Provider store={store}>
                <AllTaskList/>
            </Provider>
        )
    })
    expect(screen.getByText(/Все задачи/i)).toBeInTheDocument()
})