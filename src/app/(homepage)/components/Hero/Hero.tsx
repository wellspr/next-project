import "./hero.scss";
import { appFeatures, appHeadline, appName } from "@/config";

export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__content">

                <div className="hero__content__main">
                    <h2 className="hero__content__main__title">{appName}</h2>
                    <h3 className="hero__content__main__sub">{appHeadline}</h3>
                </div>

                <div className="hero__content__features">
                    <ul className="hero__content__features__list">
                        {
                            appFeatures.map(feature => {
                                return (
                                    <li key={feature.id}
                                        className="hero__content__features__list__item">
                                        <h4 className="hero__content__features__list__item__headline">
                                            {feature.headline}
                                        </h4>
                                        <div className={`hero__content__features__list__item__image hero__content__features__list__item__image--${feature.image.id}`}></div>
                                        <span className="hero__content__features__list__item__description">
                                            {feature.description}{"."}
                                        </span>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>

                <div className="hero__content__call-to-action">
                    <button className="hero__content__call-to-action__button">
                        Get started
                    </button>
                </div>
            </div>
        </div>
    );
}