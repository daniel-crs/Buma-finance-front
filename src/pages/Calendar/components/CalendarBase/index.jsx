import "./style.css"

function CalendarBase() {
    // function printDays() {
    //     let firstDay = new Date(year, month, 1).getDay();
    //     let lastDay = new Date(year, month + 1, 0).getDate();
    //     let lastDayOfLastMonth = new Date(year, month, 0).getDate();
    //     let lastDayOfNextMonth = new Date(year, month, lastDay).getDay();
    //     let liTag = "";

    //     for(let i = firstDay; i > 0; i--) {
    //         liTag += `<p className="teste">${lastDayOfLastMonth - i + 1}</p>`;
    //     }

    //     for(let i = 1; i <= lastDay; i++) {
    //         liTag += `<p>${i}</p>`;
    //     }

    //     for(let i = lastDayOfNextMonth; i < 6; i++) {
    //         liTag += `<p>${i - lastDayOfNextMonth + 1}</p>`;
    //     }

    //     return liTag;
    // }

    return (
        <div className="calendar-container">
            <div className="calendar">
                <div className="weeks">
                    <p>Domingo</p>
                    <p>Segunda</p>
                    <p>Terça</p>
                    <p>Quarta</p>
                    <p>Quinta</p>
                    <p>Sexta</p>
                    <p>Sábado</p>
                </div>

                <div className="days">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                    <p>12</p>
                    <p>13</p>
                    <p>14</p>
                    <p>15</p>
                    <p>16</p>
                    <p>17</p>
                    <p>18</p>
                    <p>19</p>
                    <p>20</p>
                    <p>21</p>
                    <p>22</p>
                    <p>23</p>
                    <p>24</p>
                    <p>25</p>
                    <p>26</p>
                    <p>27</p>
                    <p>28</p>
                    <p>29</p>
                    <p>30</p>
                    <p>31</p>
                </div>
            </div>
        </div>
    )
}

export default CalendarBase