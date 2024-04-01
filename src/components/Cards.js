import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1> Experience These awe-inspiring Destinations</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src="/images/Djerba.jpg"
                            text='Unleash your wanderlust and experience
                         the magic of Djerba,the DREAM Island that 
                         will steal your heart away.'
                            label='Escapade'
                            path='/services'
                        />
                        <CardItem
                            src="/images/Tozeur.jpg"
                            text='Tamerza, Chebika, Mides Canyons and Star Wars locations Day Tour'
                            label='Discovery'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src="/images/Matmata.jpg"
                            text='Door of the tunisian desert Ksar Ghilane and Matmata: Full one Day'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src="/images/South.jpg"
                            text='3 Days South Tunisia Discovery Tour with camp stay and Meals'
                            label='Exploration'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src="/images/Hammamet.jpg"
                            text='Day Trip off the beaten track to Cap Bon from Tunis or Hammamet'
                            label='Excursion'
                            path='/services'
                        />
                        <CardItem
                            src="/images/Bizerte.jpg"
                            text='North Africa Tour to Utique-Bizerte-Ichkeul park'
                            label='Journey'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards;
