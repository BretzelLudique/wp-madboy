import { createLazyFileRoute } from "@tanstack/react-router";
import { Typography } from "@mui/material";
import { useEffect } from "react";

export const Route = createLazyFileRoute("/")({
    component: Index,
});

function Index() {
    useSegmentScrolling();
    return (
        <div style={{ textAlign: "center" }}>
            <div>
                <img
                    style={{ width: "80vw" }}
                    src="pexels-ryutaro-tsukata-6249543.jpg"
                />
            </div>
            <Typography>BIENVENUE – IRASSHAIMASE いらっしゃいませ </Typography>
            <Typography>01.</Typography>
            <Typography>LE LIEU</Typography>
            <div>
                <img
                    style={{ width: "80vw" }}
                    src="pexels-ryutaro-tsukata-6249543.jpg"
                />
            </div>
            <Typography>UN HAVRE DE PAIX DÉDIÉ AU BIEN-ÊTRE</Typography>
            <Typography>
                « Je suis bien plus qu’un lieu de passage, je suis un voyage… Un
                sanctuaire qui parle de sérénité et d’équilibre. Un lieu hors du
                temps où l&#39;on vient se détendre de la vie quotidienne et
                obtenir une énergie nouvelle. Je vous ferai entrer dans un monde
                où le temps se fige, où l’on se perd et se retrouve. Là où tout
                reprend son sens, sa source… »
            </Typography>
            <Typography>La Source</Typography>
            <Typography>02.</Typography>
            <Typography>NOTRE DÉMARCHE L&#39;OMOTENASHI おもてなし</Typography>
            <div>
                <img
                    style={{ width: "80vw" }}
                    src="pexels-ryutaro-tsukata-6249543.jpg"
                />
            </div>
            <Typography>
                Nous souhaitons accueillir chaque client comme un invité dans
                notre propre maison. Ces quelques mots résument à eux seuls la
                philosophie de l’Omotenashi. C’est aussi se soucier des petits
                détails, les offrir avec amour à l&#39;invité qui peut profiter
                de la beauté qui l&#39;entoure.
            </Typography>
            <Typography>UN CONCEPT UNIQUE</Typography>
            <Typography>
                Enracinés dans la culture du bain japonais, nous voulons offrir
                un lieu de détente où le corps et l&#39;esprit peuvent vraiment
                se ressourcer. Tranquillité, beauté et harmonie sont les
                maîtres-mots de notre démarche.
            </Typography>
            <Typography>EN PARTENARIAT AVEC LA NATURE</Typography>
            <Typography>
                Nous adaptons une démarche responsable, respectueuse de la
                nature et du consommateur en privilégiant des fournisseurs
                engagés qui partagent notre philosophie. Ainsi, toutes nos
                actions sont conçues afin de préserver notre environnement.{" "}
            </Typography>
            <Typography>UN SAVOIR-FAIRE AUTHENTIQUE </Typography>
            <Typography>
                Portée par une vision holistique du bien-être, la
                personnalisation est au cœur de notre démarche. Nous avons la
                conviction que chaque personne suit un chemin unique vers le
                bien-être. Ainsi, notre volonté est d’offrir une expérience
                unique et de répondre parfaitement aux besoins de notre
                clientèle par une écoute active et de bienveillance.
            </Typography>
            <Typography>03.</Typography>
            <Typography>LE PARCOURS</Typography>
            <div>
                <img
                    style={{ width: "80vw" }}
                    src="pexels-ryutaro-tsukata-6249543.jpg"
                />
            </div>
            <Typography>
                Tout commence par un rendez-vous … A peine le seuil franchi,
                laissez-vous imprégner par un écrin chaleureux parsemé de
                lumière. Repos et plénitude au cœur d’un univers à la pureté
                naturelle et à la simplicité raffinée. Un accueil chaleureux
                vous fait immédiatement comprendre le sens du mot Omotenashi.
                Vient ensuite le temps du conseil, un échange privilégié. Le son
                de la musique relaxante, le doux tintement du Gong, et
                l&#39;arôme des huiles essentielles arrêtent le temps, il
                devient lieu. Avant de rejoindre le monde réel, une tasse de
                thé, un moment calme et spirituel que vous savourez
            </Typography>
            <Typography>
                 Ne demeure pas dans le passé, Ne rêve pas du futur, Concentre
                ton esprit sur le moment présent. »
            </Typography>
            <Typography>Siddarta Gautama बुद्ध dit le Buddha</Typography>
            <div>
                <img
                    style={{ width: "80vw" }}
                    src="pexels-ryutaro-tsukata-6249543.jpg"
                />
            </div>
            <Typography>04.</Typography>
            <Typography>NOTRE HISTOIRE, MON IKIGAI 生き甲斐</Typography>
            <Typography>
                « Le bonheur de trouver du sens à ce que l’on fait. »
            </Typography>
            <Typography>Mon Ikigaï</Typography>
            <div>
                <img
                    style={{ width: "80vw" }}
                    src="pexels-ryutaro-tsukata-6249543.jpg"
                />
            </div>
            <Typography>
                « LA SOURCE est née d’une volonté de connecter plus fortement
                mes aspirations personnelles avec ce qui m’anime
                professionnellement : La Beauté et le Bien-être holistique Être
                à l’écoute de nos précieux clients, unir mes mains et mon cœur
                pour prendre soin d’eux. Offrir des parcelles de bonheur, des
                étincelles de magie. » Lydie CHUOP
            </Typography>
            <div>
                <img
                    style={{ width: "80vw" }}
                    src="pexels-ryutaro-tsukata-6249543.jpg"
                />
            </div>
            <Typography>
                « Nous souhaitons vous offrir un voyage inoubliable à travers
                tous vos sens. Le doux arôme des huiles essentielles. Le son de
                la musique relaxante. Le goût authentique du thé japonais. Et
                surtout, le plaisir d&#39;un toucher guérisseur professionnel.
                Nous voulons que tout vous enveloppe ici, pour une détente
                parfaite.&quot; Lydie &amp; Bandaul CHUOP Fondateurs de La
                Source
            </Typography>
        </div>
    );
}
/**
 * This function allows the user to smoothly scroll a predetermined value when using the mousewheel
 */
function useSegmentScrolling() {
    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            event.preventDefault();

            const scrollDistance = 50;

            // Smooth scrolling animation
            const startTime = performance.now();
            const duration = 500; // Duration of the animation in milliseconds

            const animateScroll = (timestamp: number) => {
                const elapsed = timestamp - startTime;
                const progress = elapsed / duration;
                // TODO : buffer successive inputs (atm user can spam scroll wheel)
                // Calculate the new scroll position using easing function (here using linear easing)
                const newPos =
                    window.scrollY +
                    (event.deltaY > 0 ? scrollDistance : -scrollDistance) *
                        progress;

                window.scrollTo(0, newPos);

                if (elapsed < duration) {
                    window.requestAnimationFrame(animateScroll);
                }
            };
            window.requestAnimationFrame(animateScroll);
        };

        window.addEventListener("wheel", handleScroll);
        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);
}
