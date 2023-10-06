import { pool } from "../config/database.js";

const getEvents = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM events ORDER BY id ASC");
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getEventsByVenue = async (req, res) => {
  try {
    const venue = req.params.venue;
    const selectQuery = `
      SELECT name, pricePoint, audienceSize, image, description, venue
      FROM events
      WHERE venue = ${venue}
    `;
    const results = await pool.query(selectQuery);

    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
export default {
  getEvents,
  getEventsByVenue,
};
