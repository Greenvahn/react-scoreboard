import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

const Stats = ({ players, highestScore }) => {

    const totalPlayers = players.length;
    const totalPoints = players.reduce((total, player) => {
        return total + player.score;
    }, 0);

    return (
        <Consumer>
            {
                context => {
                    return (
                        <table className="stats">
                            <tbody>
                                <tr>
                                    <td>Players:</td>
                                    <td>{totalPlayers}</td>
                                </tr>
                                <tr>
                                    <td>Total Points:</td>
                                    <td>{totalPoints}</td>
                                </tr>
                                <tr>
                                    <td>Highest Score:</td>
                                    <td>{highestScore}</td>
                                </tr>
                            </tbody>
                        </table>
                    );
                }
            }
        </Consumer>
    )
}

Stats.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object)
}

export default Stats;