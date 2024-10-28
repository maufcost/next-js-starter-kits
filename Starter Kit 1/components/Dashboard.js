'use client';

import Calendar from './Calendar';
import { useAuth } from '@/context/AuthContext';
import { db } from '@/firebase';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState, useEffect} from 'react';
import AuthWall from './AuthWall';
import Loading from './Loading';

const Dashboard = () => {
    const { currentUser, userDataObject, setUserDataObject, loading } = useAuth();
    const [data, setData] = useState({});

    const statuses = {
        num_days: 14,
        time_remaining: '13:14:26',
        date: (new Date()).toDateString(),
    };

    const moods = {
        '$*@!': '😠',
        'Sad': '😔',
        'Existing': '😶',
        'Good': '🙂',
        'Elated': '😊'
    }

    useEffect(() => {
        if (!currentUser || !userDataObject) {
            return;
        }

        setData(userDataObject);

    }, [currentUser, userDataObject]);

    const countValues = () => {

    }

    const handleSetMood = async mood => {
        const now = new Date();
        const day = now.getDate();
        const month = now.getMonth();
        const year = now.getFullYear();

        try {
            const newData = { ...data };

            if (!newData?.[year]) {
                newData[year] = {};
            }

            if (!newData?.[year]?.[month]) {
                newData[year][month] = {};
            }

            newData[year][month][day] = mood;
            // Update the current state
            setData(newData);

            // Update the global state
            setUserDataObject(newData);
            
            // Update firebase
            const docRef = doc(db, 'users', currentUser.uid);
            const res = await setDoc(docRef, {
                [year]: {
                    [month]: {
                        [day]: mood
                    }
                }
            }, { merge: true });

        } catch (error) {
            console.log('Error setting mood', error.message)
        }
    }

    if (loading) return <Loading />;
    if (!currentUser) return <AuthWall />;

    return (
        <div>
            <p>You're authenticated, so here's your dashboard!</p>
            {Object.keys(statuses).map((status, index) => {
                return (
                    <div key={index}>
                        <p>{status}</p>
                        <p>{statuses[status]}</p>
                    </div>
                )
            })}
            <h4>How do you feel today?</h4>
            {Object.keys(moods).map((mood, index) => {
                return (
                    <button key={index} onClick={() => handleSetMood(index + 1)}>
                        <p>{moods[mood]}</p>
                        <p>{mood}</p>
                    </button>
                )
            })}
            <Calendar data={data} handleSetMood={handleSetMood} />
        </div>
    )
}

export default Dashboard