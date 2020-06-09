
exports.up = function(knex) {
  return knex.schema.table("cars", tbl => {
      tbl.string("transmission-type");
      tbl.string("title-status");
  })
};

exports.down = function(knex) {
  return knex.schema.table("cars", tbl => {
      tbl.dropColumn("transmission-type");
      tbl.dropColumn("title-status");
  })
};
