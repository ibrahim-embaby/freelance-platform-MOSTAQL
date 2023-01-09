import { useEffect } from "react";
import Header from "../../components/header/Header";
import "./addProject.css";
import { FaCloudUploadAlt } from "react-icons/fa";

function AddProject() {
  useEffect(() => {
    document.title = "   إضافة مشروع  | مستقل";
  }, []);
  return (
    <div className="addProject">
      <Header path="الرئيسية / مشاريعي" title="إضافة مشروع" how noFilter />
      <form>
        <div className="addProjectWrapper">
          <div className="addProjectForm">
            <div className="inputContainer">
              <label className="projectInputTitle" htmlFor="projectTitle">
                عنوان المشروع <sup>*</sup>
              </label>
              <input
                className="projectInput"
                type="text"
                id="projectTitle"
                required
              />
              <span className="projectInputNote">
                أدرج عنوانا موجزا يصف مشروعك بشكل دقيق.
              </span>
            </div>

            <div className="inputContainer">
              <label className="projectInputTitle" htmlFor="projectDetails">
                تفاصيل المشروع <sup>*</sup>
              </label>
              <textarea
                style={{ resize: "vertical" }}
                className="projectInput"
                name=""
                id="projectDetails"
                rows="10"
                required
              ></textarea>
              <span className="projectInputNote">
                أدخل وصفاً مفصلاً لمشروعك وأرفق أمثلة لما تريد ان أمكن.
              </span>
            </div>

            <div className="inputContainer">
              <label className="projectInputTitle" htmlFor="projectSkills">
                المهارات المطلوبة
              </label>
              <select className="projectInput" name="" id="projectSkills">
                <option value=""></option>
                <option value="">فوتوشوب</option>
                <option value="">العربية</option>
                <option value="">تصميم شعار</option>
                <option value="">الإنجليزية</option>
              </select>
              <span className="projectInputNote">
                حدد أهم المهارات المطلوبة لتنفيذ مشروعك.
              </span>
            </div>
            <div className="projectPayment">
              <div className="inputContainer half">
                <label
                  className="projectInputTitle"
                  htmlFor="projectPaymentRange"
                >
                  الميزانية المتوقعة<sup>*</sup>
                </label>
                <select
                  className="projectInput"
                  name=" "
                  id="projectPaymentRange"
                  required
                  style={{ cursor: "pointer" }}
                >
                  <option value=""></option>
                  <option value="">25 - 50 دولار</option>
                  <option value="">50 - 100 دولار</option>
                  <option value="">100 - 250 دولار</option>
                  <option value="">250 - 500 دولار</option>
                </select>
                <span className="projectInputNote">
                  اختر ميزانية مناسبة لتحصل على عروض جيدة
                </span>
              </div>
              <div className="inputContainer half">
                <label className="projectInputTitle" htmlFor="projectTime">
                  المدة المتوقعة للتسليم<sup>*</sup>
                </label>
                <div className="specialInput">
                  <input
                    className="projectInput"
                    type="number"
                    min="1"
                    id="projectTime"
                    required
                  />
                  <span className="projectTimeDays">أيام</span>
                </div>
                <span className="projectInputNote">
                  متى تحتاج استلام مشروعك
                </span>
              </div>
            </div>
            <label htmlFor="file" className="inputContainer">
              <label className="projectInputTitle" htmlFor="projectSkills">
                ملفات توضيحية
              </label>
              <div className="fileChooser">
                <div className="fileChooserIconContainer">
                  <FaCloudUploadAlt className="fileChooserIcon" />
                </div>
                <div className="FileChooserText">
                  <div className="fileChooserTitle">اسحب الملفات إلى هنا</div>
                  <div className="fileChooserDesc">أو انقر للاختيار يدويا</div>
                </div>
              </div>
              <input id="file" type="file" hidden />
            </label>
          </div>

          <div className="addProjectInfo">
            <div className="infoTitle">ابدأ ببناء مشروعك</div>
            <div className="infoDesc">
              من خلال مستقل تستطيع بناء مشروعك بالشكل الذي تريد، أدخل تفاصيل
              المشروع والميزانية المتوقعة، ليتم مراجعة مشروعك ونشره مجاناً على
              مستقل.
              <br />
              بعد ذلك، سيتقدّم أفضل المستقلين المسجلين بعروض مختلفة لتختار العرض
              المناسب لك وتبدأ بتنفيذ مشروعك.
            </div>

            <div className="infoTitle">موقع مستقل يضمن حقوقك</div>
            <div className="infoDesc">
              عندما تتعامل مع أحد المستقلين من خلال موقع مستقل، يبقى الموقع
              وسيطا بينك وبين المستقل الذي ينفّذ مشروعك وفقط عندما ينتهي تنفيذ
              المشروع كاملاً يتم تحويل المبلغ لحساب المستقل الذي نفّذ مشروعك.
            </div>

            <div className="infoTitle">نصائح لعمل ناجح</div>
            <ul className="infoDesc list">
              <li>أدخل تفاصيل المشروع بدقة</li>
              <li>املأ جميع الحقول ووفّر أمثلة لما تريد</li>
              <li>جزّء المشروع على عدّة مراحل صغيرة</li>
            </ul>
          </div>
        </div>
        <div className="projectControls">
          <button className="projectControlsButton blue" type="submit">
            انشر الآن
          </button>
          <button className="projectControlsButton">حفظ كمسودة</button>
        </div>
      </form>
    </div>
  );
}

export default AddProject;
