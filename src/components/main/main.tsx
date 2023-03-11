import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image';

import Logo from './assets/logo.webp'
import EthereumCoin from './assets/ethereum.png'
import BitcoinCoin from './assets/bitcoin.png'

import styles from './main.module.scss'

const inter = Inter({ subsets: ['latin'] })


export function Main() {
  return (
    <>
      <main className={`${inter.className} ${styles.main} ${styles.wrapper}`}>
        <Image
          className={styles.bitcoin}
          src={BitcoinCoin}
          alt="Logo"
          width={350}
          placeholder="blur"
        />
        <div className={styles.bitcoinGlow}  />

        <Image
          className={styles.ethereum}
          src={EthereumCoin}
          alt="Logo"
          width={400}
          placeholder="blur"
        />
        <div className={styles.ethereumGlow}  />

        <div className={styles.blockWrapper}>
          <Image
            src={Logo}
            alt="Logo"
            width={350}
            placeholder="blur"
          />
          <div className={styles.block}>
            <div className={styles.mainTitle}>
              Ocean Trading Analytics
            </div>
            <div className={styles.mainSubTitle}>
              Ocean TA — перше криптоком'юніті, де було розроблено та надано авторську беззбиткову стратегію локальних торгів на ф'ючерсах. Ця стратегія запатентована нами і не має аналогів у світі.
            </div>
            <Link href="/" className={styles.joinButton}>Послуги</Link>
          </div>
        </div>

        <section>
          <header className={styles.subTitle}>Сейчас нас уже 400 человек</header>
        </section>

        <section className={styles.section}>
          <header>Ocean Trading Analytics</header>
          <div>
            Ocean TA — первое криптокомьюнити, где была разработана и предоставлена авторская безубыточная стратегия локальных торгов на фьючерсах. Данная стратегия запатентована нами и не имеет в мире аналогов.
          </div>
        </section>

        <section className={styles.section}>
          <header>Команда Ocean TA</header>
          <div>
            Нас зовут Александр и Любовь. Трейдинг — наша основная работа. Наши коллеги и мы предоставляем полезную информацию, делимся ей на наших ресурсах, чтобы поддерживать ваши стремления к реализации профессиональных и личных целей, связанных с успехом, обучением и карьерой в трейдинге.
            <br/>
            Коротко о нашем опыте:
            На протяжении 7 лет нашей карьеры в биржевой торговле, мы копили знания и опыт как свои личные, так и наших партнёров, клиентов и друзей, чтобы делиться с вами. Наш опыт: торговля в разных направлениях крипторынка, опыт открытия и управления бизнесом, роль как работодателями, так и наёмными трейдерами.
            <br/>
            Наша цель:
            Создание сплоченного комьюнити единомышленников с единой миссией: объединить стабильный высокий доход без потерь с коллективным общением и взаимопомощью для дальнейшего глобального расширения.          </div>
        </section>

        <section className={styles.section}>
          <header>Послуги Ocean TA</header>

            <div className={styles.cardWrapper}>
              <div className={styles.card}>
                <div>
                  Дальнейшее сопровождение после обучения и помощь с возникшими вопросами с нашим ментором online, пока вы не освоите материал и не будете чувствовать себя в трейдинге уверенно. Работа с наставником – это экономия вашего времени и денег, что поможет сохранить ваш капитал.
                </div>
                <div>
                  1 Интенсивный курс  50$
                </div>

                <div className={styles.cardButtonsWrapper}>
                  <button className={styles.cardButton}>
                    50 USD
                    {/*Кнопка "Купить за фиат" (банковская карта) - ссылку партнера позже пришлю*/}
                  </button>
                  <button className={styles.cardButton}>
                    50 USDT
                    {/*Кнопка "Купить за криптовалюту" (перевод криптовалюты) - надеемся на твою помощь*/}
                  </button>
                </div>
              </div>

              <div className={styles.card}>
                <div>
                  Описанные стратегии в мануале будут полезны вам при желании зарабатывать на крипторынке без рисков. Вы научитесь грамотно управлять своим капиталом, не имея должного опыта и практики. Если вас интересует заработок на крипторынке, советуем начинать именно с P2P платформы.
                </div>

                <div>
                  2 P2P мануал  100$
                </div>

                <div className={styles.cardButtonsWrapper}>
                  <button className={styles.cardButton}>
                    Купить за фиат
                    {/*Кнопка "Купить за фиат" (банковская карта) - ссылку партнера позже пришлю*/}
                  </button>
                  <button className={styles.cardButton}>
                    Купить за криптовалюту
                    {/*Кнопка "Купить за криптовалюту" (перевод криптовалюты) - надеемся на твою помощь*/}
                  </button>
                </div>
              </div>

              <div className={styles.card}>
                <div>
                  Бессрочный доступ ко всем сделкам Ocean TA. Как только мы заключаем новую сделку, вы сразу её увидите!
                </div>

                <div>
                  3 VIP подписка 400$
                </div>

                <div className={styles.cardButtonsWrapper}>
                  <button className={styles.cardButton}>
                    Купить за фиат
                    {/*Кнопка "Купить за фиат" (банковская карта) - ссылку партнера позже пришлю*/}
                  </button>
                  <button className={styles.cardButton}>
                    Купить за криптовалюту
                    {/*Кнопка "Купить за криптовалюту" (перевод криптовалюты) - надеемся на твою помощь*/}
                  </button>
                </div>
              </div>

              <div className={styles.card}>
                <div>
                </div>
                  Стратегия — это мануал, где подробно составлен алгоритм действий в свинг трейдинге. Независимо от того, куда будет идти цена на графике, вы всегда будете знать как поступить и как на этом заработать.
                  {/*Главное преимущество стратегии — полное исключение убытка. Ведение торгов только по данной методике выведет вас на высокостабильную прибыль.*/}
                <div>
                  4 Авторская безубыточная стратегия для среднесрочных торгов на фьючерсах Ocean TA 1200$
                </div>

                <div className={styles.cardButtonsWrapper}>
                  <button className={styles.cardButton}>
                    Купить за фиат
                    {/*Кнопка "Купить за фиат" (банковская карта) - ссылку партнера позже пришлю*/}
                  </button>
                  <button className={styles.cardButton}>
                    Купить за криптовалюту
                    {/*Кнопка "Купить за криптовалюту" (перевод криптовалюты) - надеемся на твою помощь*/}
                  </button>
                </div>
              </div>
            </div>
        </section>

        <section className={styles.section}>
          <header>Отчётность действий Ocean TA</header>
          <div>
            Создание сплоченного комьюнити единомышленников с единой миссией: объединить стабильный высокий доход без потерь с коллективным общением и взаимопомощью для дальнейшего глобального расширения.
          </div>
        </section>
      </main>
    </>
  )
}
