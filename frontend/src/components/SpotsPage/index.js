import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpotsThunk } from '../../store/spotsReducer';
import SpotCard from './SpotCard';

function SpotsPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSpotsThunk())
    }, [dispatch])

    const spotsArr = useSelector((state) => Object.values(state.spots.allSpots))


    if (!spotsArr) return <></>
    return (
        <div className='spot-card-container'>
            <div className='spot-card-wrapper'>
                {spotsArr.map((spot) => {
                    return <SpotCard key={spot.id} spot={spot} />
                })}
            </div>
        </div>
    )
}

export default SpotsPage
