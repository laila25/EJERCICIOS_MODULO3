const getDataFromServer = () => {
  return fetch("./api-data.json")
    .then(response => response.json())
    .then(clubs => {
      clubs.map(club => {
        return {
          name: club.name,
          members: club.members,
          icon: club.fa
        };
      });
    });
};

export default getDataFromServer;
