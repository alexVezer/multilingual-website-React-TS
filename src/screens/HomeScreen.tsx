import React, {Fragment} from 'react'
import { useTranslation, Trans } from 'react-i18next';
import i18n from '../i18n';


const lngs = {
    en: { nativeName: 'English' },
    ro: { nativeName: 'Romana' }
  };

const HomeScreen = () => {
    const { t, i18n } = useTranslation();

    return (
        <Fragment>
            <h2>HomeScreen</h2>
            <h3>Welcome</h3>
            <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
            <div className='box'>
            <p>
                <Trans i18nKey="intro.p1">
                When you need a website, what you actually need is an identity.
                </Trans>
            </p>
            <p>
                <Trans i18nKey="intro.p2">
                    {t('intro.p2')}
                </Trans>
                </p>
            <p>That is a lot</p>
            </div>
            <div className='box'>
                I will focus on finding that something that defines you or your business so we will show you on your best.
            </div>
            <div className="box">My work is aligned to top industry standards: 
            <ul>
                <li>responsive designs</li>
                <li>seo optimization</li>
                <li>social media integration</li>
                <li>scalability</li>
            </ul>
            </div>
            <div>
                <p>We will keep a close connection trough the entire project to make sure everything is up to your wishes</p>
            </div>
            <div className="box">
                <p>I will consider your requirements and provide the best suited solution, so you will not waste resources on useless flashiness.</p>
            </div>
            <div className="box">
                Better invest in an online marketing campaign that will bring you customers. 
            </div>
        </Fragment>
    )
}

export default HomeScreen
