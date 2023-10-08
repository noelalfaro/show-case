import { pool } from "../config/database.js";

const getEvents = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM events ORDER BY id ASC");
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
const getEventsByVenueId = async (req, res) => {
  try {
    const venueId = req.params.venueId; // Convert to lowercase
    const selectQuery = `
      SELECT id, name, pricePoint, audienceSize, description, venue, venueId
      FROM events
      WHERE venueId = $1
    `;
    const results = await pool.query(selectQuery, [venueId]);

    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  getEvents,
  getEventsByVenueId,
};
