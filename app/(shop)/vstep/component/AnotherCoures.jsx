import React from "react";
import pic9 from "public/kh_9.jpg";
import pic13 from "public/13.jpg";
import pic15 from "public/15.jpg";
import pic11 from "public/kh_11.jpg";
import Image from "next/image";

function AnotherCoures(props) {
  const list = [
    { pic: pic9, title: "Luyện thi IELTS" },
    { pic: pic13, title: "Luyện thi APTIS" },
    { pic: pic11, title: "Luyện thi TOEIC" },
    { pic: pic15, title: "Anh ngữ học thuật" },
  ];
  return (
    <div>
      <h2>Các chương trình học khác</h2>
      <div>
        <ul>
          {list.map((value, ind) => (
            <li key={ind}>
              <div>
                <div>
                  <Image src={value.pic} height={183} width={224} />
                </div>
                <div>
                  <p>{value.title}</p>
                  <button>Xem thêm</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AnotherCoures;
