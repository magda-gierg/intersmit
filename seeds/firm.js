
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, about:'Intersmit LTD jest spółką z o.o. która powstała w 1991r. Założycielem firmy był holender Pan Wilhelmus Smits - jej długoletni Prezes Zarządu. Począwszy od 1999 roku Prezesem Zarządu jest Pan Tomasz Dzierżanowski. Spółka zarejestrowana jest w Sądzie Rejonowym w VIII Wydziale Gospodarczym Krajowego Rejestru Sądowego pod numerem 0000136096.', service:'Transportem samochodów osobowych zajmujemy się od 1991 roku i w związku z tym posiadamy duże doświadczenie w tym zakresie.', contact:'+48 77 4550363 Spedycja'},
        {id: 2,  about:'Intersmit Ltd is a limited company established in 1991. It was founded by Mr. Wilhelmus Smits, a Dutch citizen, who was its longtime board director. Since 1999 the company has been headed by Mr. Tomasz Dzierżanowski. The company is registered at the County Court, Economic Department VIII of the National Court Register, under the number of 0000136096.', service:'We have been transporting passenger cars since 1991 and, hence, our extensive expertise in the business.', contact:'+48 77 4550363 shipping'},
        {id: 3, about:'Intersmit LTD ist eine Gesellschaft mbH, die im Jahre 1991 gegründet worden ist. Der Firmengründer war der Holländer, Herr Wilhelmus Smits - ihr langjähriger Geschäftsführer.', service:'Mit dem Transport von Personenwagen beschäftigen wir uns seit 1991 und haben deswegen grosse Erfahrung in diesem Bereich.', contact:'+48 77 4550363 Spedition'}
      ]);
    });
};
