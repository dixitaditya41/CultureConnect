import React from 'react';

const Brazil = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    padding: '0 20px',
  };

  const headerStyle = {
    backgroundColor: '#FFD700',
    color: '#fff',
    padding: '10px 0',
    textAlign: 'center',
    borderBottom: '2px solid #333',
  };

  const mainStyle = {
    padding: '20px 0',
  };

  const sectionStyle = {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  };

  const titleStyle = {
    color: '#FF4500',
  };

  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 0',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    borderTop: '2px solid #FFD700',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  };

  const videoStyle = {
    width: '100%',
    height: '315px',
    borderRadius: '5px',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1>Brazil</h1>
      </header>
      <main style={mainStyle}>
        <h2 style={titleStyle}>Experience the Vibrant Colors and Rhythms of Brazil</h2>

        <section style={sectionStyle}>
          <h3 style={titleStyle}>Carnivals</h3>
          <p>Brazil is famous for its lively carnivals, especially the Rio Carnival, which is known for its spectacular parades and samba music.</p>
          <video style={videoStyle} controls>
            <source src="https://media.istockphoto.com/id/926185748/video/carnival-parade.mp4?s=mp4-640x640-is&k=20&c=-rdMtnNdYMjcpaCMhuVSI6CgcnGjJgI2Cf8gLxNb16M=" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video style={videoStyle} controls>
            <source src="https://media.gettyimages.com/id/163748346/video/carnival-parade-rio-de-janeiro-brazil.mp4?s=mp4-640x640-gi&k=20&c=iXF8oMl5XxDNwyFLkCROJ-Y128fVsBZAmaM4J_07rwI=" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video style={videoStyle} controls>
            <source src="https://media.gettyimages.com/id/161672227/video/general-views-rio-carnival-parade-2013.mp4?s=mp4-640x640-gi&k=20&c=zvEB3wnvVuZzNW0ISX2td1HOPXDKl1qASsfvTvY3ty8=" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video style={videoStyle} controls>
            <source src="https://media.gettyimages.com/id/1461089316/video/samba-dancers-rehearse-for-carnival.mp4?s=mp4-640x640-gi&k=20&c=b_PcJjXHMMnsbO0By-LEim4rRIwHy9Qnn194E2Odre8=" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        <section style={sectionStyle}>
          <h3 style={titleStyle}>Festivals</h3>
          <p>Aside from carnivals, Brazil hosts numerous festivals like Festa Junina, which celebrates traditional rural life, and the Parintins Folklore Festival, showcasing local folklore.</p>
          <video style={videoStyle} controls>
            <source src="https://v.ftcdn.net/07/82/37/87/700_F_782378770_EXvut5qzWqL6jouyqkxJbq3MKVrrDGJi_ST.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        <section style={sectionStyle}>
          <h3 style={titleStyle}>Culture</h3>
          <p>Brazilian culture is a rich blend of indigenous, African, and Portuguese influences. It's known for its diverse traditions, cuisine, and festivals.</p>
          <img style={imageStyle} src="https://www.example.com/brazil-culture.jpg" alt="Brazilian Culture" />
        </section>

        <section style={sectionStyle}>
          <h3 style={titleStyle}>Events</h3>
          <p>Major events include the Brazilian Grand Prix, the Bienal de São Paulo, and various local fairs and markets throughout the year.</p>
        </section>

        <section style={sectionStyle}>
          <h3 style={titleStyle}>Art</h3>
          <p>Brazilian art spans a wide range of styles, from traditional crafts to contemporary visual arts. Key figures include Tarsila do Amaral and Beatriz Milhazes.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <img style={imageStyle} src="https://www.example.com/tarsila-art.jpg" alt="Art by Tarsila do Amaral" />
            <img style={imageStyle} src="https://www.example.com/beatriz-art.jpg" alt="Art by Beatriz Milhazes" />
          </div>
        </section>

        <section style={sectionStyle}>
          <h3 style={titleStyle}>Dance</h3>
          <p>Brazilian dance is known for its rhythm and diversity, including samba, bossa nova, and capoeira. Each region has its unique dance forms and styles.</p>
        </section>

        <section style={sectionStyle}>
          <h3 style={titleStyle}>Music</h3>
          <p>Brazilian music is vibrant and varied, with genres like samba, bossa nova, and forró. Influential artists include João Gilberto, Caetano Veloso, and Gilberto Gil.</p>
          <audio controls>
            <source src="https://wynk.in/u/7cT5tgfu0" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 CultureConnect. All rights reserved.</p>
        <p>Designed by Isha Shukla</p>
      </footer>
    </div>
  );
};

export default Brazil;
