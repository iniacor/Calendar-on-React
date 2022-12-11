const baseUrl = "https://62da9225e56f6d82a7651b64.mockapi.io/api/v1/events";

export const postEvent = (eventData) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Internal Server Error. Can't display events");
      }
    })
    .catch((error) => {
      alert(error.message);
    });

export const getEvents = (fn) =>
  fetch(baseUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Internal Server Error. Can't display events");
    })
    .then((eventData) => {
      const updEventsList = eventData.map((event) => ({
        ...event,
        dateFrom: new Date(event.dateFrom),
        dateTo: new Date(event.dateTo),
      }));
      fn(updEventsList);
    })
    .catch((error) => {
      alert(error.message);
    });

export const fetchDelete = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(
        "Internal Server Error. Can't display events in fetchDelete"
      );
    }
  } catch (error) {
    alert(error.message);
    console.log(error.message);
  }
};
