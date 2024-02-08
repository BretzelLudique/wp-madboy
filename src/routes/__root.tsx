import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import AppBar from "../components/AppBar";
import styled from "@emotion/styled";

import { useEffect } from "react";

const ScrollAutomatique = () => {
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      // Empêche le comportement de défilement par défaut
      event.preventDefault();

      // Détermine la distance de défilement souhaitée
      const scrollDistance = 200; // Changez cette valeur selon vos besoins

      // Fait défiler la page
      window.scrollBy(0, event.deltaY > 0 ? scrollDistance : -scrollDistance);
    };

    // Ajoute l'écouteur d'événement à la fenêtre
    window.addEventListener("wheel", handleScroll);

    // Nettoie l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []); // Le tableau vide en tant que deuxième argument signifie que useEffect ne sera exécuté qu'une fois après le montage initial

  return (
    <div>
      <h1>Scroll Automatique</h1>
      <p>
        Utilisez la molette de la souris pour faire défiler automatiquement la
        page.
      </p>
    </div>
  );
};

export default ScrollAutomatique;

export const Route = createRootRoute({
  component: () => (
    <>
      <AppBarContainer>
        <AppBar />
      </AppBarContainer>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

const AppBarContainer = styled.div`
  margin-bottom: 20px;
`;
