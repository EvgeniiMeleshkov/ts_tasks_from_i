import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any


    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}
             style={{
                 padding: '3px',
                 maxWidth: 'max-content',
                 minWidth: '300px',
                 display: 'flex',
                 flexDirection: 'row',
                 justifyContent: 'space-between'
             }}>

            <div style={{textAlign: 'start'}}>{p.name}</div>
            <div style={{textAlign: 'end'}}>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const check = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))

    return (
        <div>

            homeworks 8
            {/*should work (должно работать)*/}
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{padding: '0.5rem', border: 'solid 1px #1A1A1A', borderRadius: '10px'}}>
                    {finalPeople}
                </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={check}>check 18</SuperButton></div>
            </div>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}

        </div>
    )
}

export default HW8
