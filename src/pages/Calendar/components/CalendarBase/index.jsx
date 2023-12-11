
import "./style.css"

import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

function CalendarBase() {
    return (
        <div className="calendar-container">
            <div className="caledar-header">
                <div className="date-button">
                <span className="symbols-rounded"><FaChevronLeft /></span>
                <span className="date-button-text">September 2022</span>
                <span className="symbols-rounded"><FaChevronRight /></span>
                </div>
            </div>
            <div className="calendar">
                <ul className="weeks">
                    <li>Dom</li>
                    <li>Seg</li>
                    <li>Ter</li>
                    <li>Quar</li>
                    <li>Quin</li>
                    <li>Sex</li>
                    <li>Sab</li>
                </ul>
                <ul className="days">
                    <li className="inactive"><p>26</p></li>
                    <li className="inactive"><p>27</p></li>
                    <li className="inactive"><p>28</p></li>
                    <li className="inactive"><p>29</p></li>
                    <li className="inactive"><p>30</p></li>
                    <li><p>1</p></li>
                    <li><p>2</p></li>
                    <li><p>3</p></li>
                    <li><p>4</p></li>
                    <li><p>5</p></li>
                    <li><p>6</p></li>
                    <li><p>7</p></li>
                    <li><p>8</p></li>
                    <li><p>9</p></li>
                    <li><p>10</p></li>
                    <li><p>11</p></li>
                    <li className="active"><p>12</p></li>
                    <li><p>13</p></li>
                    <li><p>14</p></li>
                    <li><p>15</p></li>
                    <li><p>16</p></li>
                    <li><p>17</p></li>
                    <li><p>18</p></li>
                    <li><p>19</p></li>
                    <li><p>20</p></li>
                    <li><p>21</p></li>
                    <li><p>22</p></li>
                    <li><p>23</p></li>
                    <li><p>24</p></li>
                    <li><p>25</p></li>
                    <li><p>26</p></li>
                    <li><p>27</p></li>
                    <li><p>28</p></li>
                    <li><p>29</p></li>
                    <li><p>30</p></li>
                    <li><p>31</p></li>
                    <li className="inactive"><p>1</p></li>
                    <li className="inactive"><p>2</p></li>
                    <li className="inactive"><p>3</p></li>
                    <li className="inactive"><p>4</p></li>
                    <li className="inactive"><p>5</p></li>
                    <li className="inactive"><p>6</p></li>
                </ul>
            </div>
        </div>
    )
}

export default CalendarBase