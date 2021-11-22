package sources

import (
	"gorm.io/gorm"
)

type Source struct {
	gorm.Model
	Enabled bool
	Name string
	UrlName string
}
