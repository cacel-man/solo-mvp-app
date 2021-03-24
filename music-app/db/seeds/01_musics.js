
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('emotions').del()
    .then(function () {
      // Inserts seed entries
      return knex('emotions').insert([
        {id: 1, URL: 'o_UUYwymh30', emotion: 'chill'},
        {id: 2, URL: '0ymcPin-4h0', emotion: 'happy'},
        {id: 3, URL: 'Y_oD111dK7c', emotion: 'sad'}
      ]);
    });
};
