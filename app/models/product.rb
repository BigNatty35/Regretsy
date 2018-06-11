# == Schema Information
#
# Table name: products
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  description :text             not null
#  title       :string           not null
#  price       :float            not null
#  img_url     :string
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Product < ApplicationRecord
  validates :user_id, :description, :title, :price, :category_id, presence: true 
  
  
  belongs_to :category
  belongs_to :user
  
end