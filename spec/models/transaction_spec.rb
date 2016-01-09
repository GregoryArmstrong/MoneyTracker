require 'rails_helper'

RSpec.describe Transaction, type: :model do
  context "validations" do 
    it { is_expected.to belong_to(:category) }
    # it { is_expected.to validate_presence_of(:amount)}
    # it { is_expected.to validate_presence_of(:description)}
  end
end
