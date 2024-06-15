export function getRank(points) {
  if (typeof points === 'number') {
    if (points >= 0 && points <= 50) {
      return (
        <img
          alt="brozen-rank"
          src="https://firebasestorage.googleapis.com/v0/b/wed-invitation-790a1.appspot.com/o/icon%2Fbronze-medal.png?alt=media&token=b5e9942d-308a-4907-a978-34b54bce22b7"
          className="w-[30px]"
        />
      );
    } else if (points > 50 && points <= 100) {
      return (
        <img
          alt="silver-rank"
          src="https://firebasestorage.googleapis.com/v0/b/wed-invitation-790a1.appspot.com/o/icon%2Fsilver-medal.png?alt=media&token=98a50a21-566c-4138-b0c4-3bf79b4ce6f1"
          className="w-[30px]"
        />
      );
    } else if (points > 100 && points <= 150) {
      return (
        <img
          alt="gold-rank"
          src="https://firebasestorage.googleapis.com/v0/b/wed-invitation-790a1.appspot.com/o/icon%2Fgold-medal.png?alt=media&token=9d49cd01-399c-49f9-bce8-b09843b2029d"
          className="w-[30px]"
        />
      );
    } else {
      return (
        <img
          alt="diamond-rank"
          src="https://firebasestorage.googleapis.com/v0/b/wed-invitation-790a1.appspot.com/o/icon%2Fdiamond.png?alt=media&token=966be13f-5eca-46c5-9bfe-9f82d6b42f89"
          className="w-[30px]"
        />
      );
    }
  } else {
    return null;
  }
}
