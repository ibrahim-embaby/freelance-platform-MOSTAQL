import Header from "../../components/header/Header";
import "./myOffers.css";
import { useEffect } from "react";
import Project from "../../components/project/Project";

function MyOffers({ setSidebar }) {
  useEffect(() => {
    document.title = " العروض الخاصة بي  | مستقل";
    setSidebar(false);
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="myOffers">
      <Header path="الرئيسية" title="العروض الخاصة بي" />
      <div className="main">
        <div className="mainBody">
          <div className="mainOffers">
            <Project
              title="تلخيص وتصميم عرض بوربوينت بالإنجليزية"
              username="Tariq A."
              time="نُشر منذ سنتين"
              offersNumber=""
              description="السلام عليكم اخي طارق

                لقد قرأت طلبك جيدا ويمكنني تنفيذه خلال 5 ايام بحد اقصي لأن ثلاثة ايام ليس وقتًا كافيا للتلخيص والتدقيق في ثلاث وحدات
                
                والا سيكون العمل غير متقن
                
                وسأدرج لك بعض أعمالي التجريبية علي Power Point
                
                مع فائق احترامي"
              price="$50.00"
              duration="مدة التنفيذ 5 أيام"
              offer
            />
          </div>
          <div className="mainOptions">
            <div className="options">
              <p className="optionsTitle">بحث</p>

              <input className="optionsSearch" type="text" />

              <p className="optionsTitle">اسم صاحب المشروع</p>
              <input className="optionsSearch" type="text" />

              <p className="optionsTitle"> الحالة</p>
              <div className="optionsClassification">
                <div className="optionsItem">
                  <input className="optionsInput" id="" type="checkBox" />
                  <label className="optionsLabel" htmlFor="">
                    بانتظار الموافقة
                  </label>
                </div>

                <div className="optionsItem">
                  <input className="optionsInput" id="" type="checkBox" />
                  <label className="optionsLabel" htmlFor="">
                    قيد التنفيذ
                  </label>
                </div>

                <div className="optionsItem">
                  <input className="optionsInput" id="" type="checkBox" />
                  <label className="optionsLabel" htmlFor="">
                    المكتملة
                  </label>
                </div>

                <div className="optionsItem">
                  <input className="optionsInput" id="" type="checkBox" />
                  <label className="optionsLabel" htmlFor="">
                    المستبعدة
                  </label>
                </div>

                <div className="optionsItem">
                  <input className="optionsInput" id="" type="checkBox" />
                  <label className="optionsLabel" htmlFor="">
                    مغلقة
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOffers;
