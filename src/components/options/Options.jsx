import './options.css'

function Options() {
    return (
        <div className='options'>
            <p className='optionsTitle'>بحث</p>

            <input className="optionsSearch" type="text" />
            <p className='optionsTitle'>التصنيف</p>
            <div className="optionsClassification">
                <div className="optionsItem">
                    <input className="optionsInput" id="" type="checkBox" />
                    <label className="optionsLabel" htmlFor="">أعمال وخدمات استشارية</label>
                </div>

                <div className="optionsItem">
                    <input className="optionsInput" id="" type="checkBox" />
                    <label className="optionsLabel" htmlFor="">برمجة، تطوير المواقع والتطبيقات</label>
                </div>

                <div className="optionsItem">
                    <input className="optionsInput" id="" type="checkBox" />
                    <label className="optionsLabel" htmlFor="">  هندسة، عمارة وتصميم داخلي </label>
                </div>

                <div className="optionsItem">
                    <input className="optionsInput" id="" type="checkBox" />
                    <label className="optionsLabel" htmlFor=""> تصميم، فيديو وصوتيات  </label>
                </div>

                <div className="optionsItem">
                    <input className="optionsInput" id="" type="checkBox" />
                    <label className="optionsLabel" htmlFor="">تسويق إلكتروني ومبيعات  </label>
                </div>

                <div className="optionsItem">
                    <input className="optionsInput" id="" type="checkBox" />
                    <label className="optionsLabel" htmlFor="">  كتابة، تحرير، ترجمة ولغات  </label>
                </div>

                <div className="optionsItem">
                    <input className="optionsInput" id="" type="checkBox" />
                    <label className="optionsLabel" htmlFor="">دعم، مساعدة وإدخال بيانات  </label>
                </div>
                <div className="optionsItem">
                    <input className="optionsInput" id="" type="checkBox" />
                    <label className="optionsLabel" htmlFor="">تدريب وتعليم عن بعد</label>
                </div>


            </div>

            <p className='optionsTitle'>المهارات</p>
            <input className="optionsSearch" type="text" />

            <p className='optionsTitle'>مدة التسليم</p>
            <div className="optionsClassification">
                <div className="optionsItem">
                    <input className="optionsInput" id="" type="checkBox" />
                    <label className="optionsLabel" htmlFor="">أقل من أسبوع واحد</label>
                </div>

                <div className="optionsItem">
                    <input className="optionsInput" id="" type="checkBox" />
                    <label className="optionsLabel" htmlFor="">من 1 إلى 2 أسابيع</label>
                </div>

                <div className="optionsItem">
                    <input className="optionsInput" id="" type="checkBox" />
                    <label className="optionsLabel" htmlFor="">   من 2 أسابيع إلى شهر</label>
                </div>

                <div className="optionsItem">
                    <input className="optionsInput" id="" type="checkBox" />
                    <label className="optionsLabel" htmlFor="">  من شهر إلى 3 أشهر </label>
                </div>


                <div className="optionsItem">
                    <input className="optionsInput" id="" type="checkBox" />
                    <label className="optionsLabel" htmlFor="">   أكثر من 3 أشهر </label>
                </div>

            </div>

            <p className='optionsTitle'>الميزانية</p>

            <input type="range" min='25' max='10000' step="25" />
        </div>
    )
}

export default Options