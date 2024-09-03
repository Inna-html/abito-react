import { useOutletContext, useParams } from "react-router-dom"
import { Header } from "../../components/Header/Header"
// import { cardArray } from "../../constants";

export const Product = () => {

    const { products } = useOutletContext();
    const { id } = useParams();
    const findProduct = products.find((p) => p.id === +id);

    


    return (
        <>
            
    <Header />
    <main>

       <section className="content">
                    <div className="container">
                        
                        {findProduct ? 
                        <div className="content-box">
                    <div className="content-product">
                        <div className="content-product_left">
                            <h2 className="content-product_title">
                                {findProduct.title}
                            </h2>

                            <img className="content-product_img" src={findProduct.img} alt="samokat" />
                            
                            <p className="content-product_text">
                                {findProduct.description}
                            </p>
                        </div>
                        <div className="content-product_right">
                                    <h2 className="content-product_price">{ findProduct.price }</h2>

                            <button className="btn btn-primary btn-large">
                                Подать объявление
                            </button>
                        </div>
                    </div>

                    <div className="content-side">
                        <h3 className="content-side_title">
                            Сервисы и услуги
                        </h3>

                        <div className="content-side_box">
                            <div className="content-side_list">
                                
                                <div className="content-side_list-item">
                                    <img className="content-side_list-item-img" src="/image/side-info1.png" alt="side-info-img" />
                                    <h5 className="content-side_list-item-title">
                                        Доставка
                                    </h5>
                                    <p className="content-side_list-item-text">
                                        Проверка при получении и возможность бесплатно вернуть товар
                                    </p>
                                </div>

                                <div className="content-side_list-item">
                                    <img className="content-side_list-item-img" src="/image/side-info2.png" alt="side-info-img" />
                                    <h5 className="content-side_list-item-title">
                                        Автотека
                                    </h5>
                                    <p className="content-side_list-item-text">
                                        Отчет с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах
                                    </p>
                                </div>

                                <div className="content-side_list-item">
                                    <img className="content-side_list-item-img" src="/image/side-info3.png" alt="side-info-img" />
                                    <h5 className="content-side_list-item-title">
                                        Онлайн-бронирование жилья
                                    </h5>
                                    <p className="content-side_list-item-text">
                                        Посуточная аренда квартир и домов: большой выбор вариантов для поездок
                                    </p>
                                </div>
                            </div>

                            <div className="content-side_footer">
                                <p className="content-side_footer-item">
                                    ООО «Абито», 2011-2020
                                </p>
                                <a href="#!" className="content-side_footer-item">
                                    Политика конфиденциальности
                                </a>
                                <a href="#!" className="content-side_footer-item">
                                    Обработка данных
                                </a>
                            </div>

                        </div>
                    </div>

                        </div>
                        :    
                        <h2>Такого товара не существует</h2> 
                    }

                
                        
            </div>
       </section>
    </main>
</>
    )
}

