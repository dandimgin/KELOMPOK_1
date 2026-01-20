const dataAnggota = {
    rakha: {
      nama: "Rakha Zuhdi Naufal",
      role: "Frontend Developer",
      hobi: "Desain UI"
    },
    dandi: {
      nama: "Dandi Fairuz",
      role: "Navbar & Git Manager",
      hobi: "Ngoding & Kopi"
    },
    cheril: {
      nama: "Nadya Cheril Dedi",
      role: "Profile Feature",
      hobi: "Editing & Coding"
    },
    gading: {
      nama: "Gading Mochamad Milan",
      role: "Content Manager",
      hobi: "Menulis"
    },
    reza: {
      nama: "Muhammad Reza Alfian",
      role: "Testing",
      hobi: "Debugging"
    },
    husein: {
      nama: "M. Husein Alfah Reza",
      role: "Remote Repository",
      hobi: "Backend Logic"
    }
  };
  
  function openModal(key) {
    const modal = document.getElementById("modal");
    const overlay = document.getElementById("overlay");
    const content = document.getElementById("modal-content");
    const data = dataAnggota[key];
  
    content.innerHTML = `
      <h3>${data.nama}</h3>
      <p><strong>Role:</strong> ${data.role}</p>
      <p><strong>Hobi:</strong> ${data.hobi}</p>
    `;
  
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
  
  function closeModal() {
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("overlay").classList.add("hidden");
  }
  