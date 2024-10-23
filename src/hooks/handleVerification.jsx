import profilesData from "../Views/LoginView/data.json";
const profiles = profilesData;
const verification = (email, password) => {
    // Nettoyage des arguments : suppression des espaces et conversion des emails en minuscules
    email = email.trim().toLowerCase();
    password = password.trim();
    // Validation des arguments
    if (!email || !password) {
        // utliser  un state global et afficher ce return dans le messagee d'erreur 
      return "Email et mot de passe requis";
    }
    // Recherche du profil correspondant dans le fichier JSON
    const profile = profiles.find(
      (occurence) => occurence.MAIL === email && occurence.PASSWORD === password
    );
  
    // Si un profil est trouvé
    if (profile) {
      console.log("Le profil a été retrouvé");
      return( {
        MAIL: profile.MAIL,
        PASSWORD: profile.PASSWORD,
        ROLE: profile.ROLE,
      })
    } else {
      return "Aucun utilisateur ne correspond à ces identifiants";
    }
  };

export default verification;
