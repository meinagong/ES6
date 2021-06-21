const team = {
  members: ['alex', 'sarah'],
  teamName: 'Sweet Smile',
  teamSummary: function() {
    return this.members.map(member => `${member} is on team ${this.teamName}`);
  }
};

console.log(team.teamSummary());